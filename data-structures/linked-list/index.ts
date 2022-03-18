export interface ListNode<T> {
    value: T;
    next?: ListNode<T>;
}

class LinkedList<T> {
    private _head?: ListNode<T>;

    constructor(initialValue?: T) {
        if (initialValue !== undefined) {
            this._head = {
                value: initialValue
            };
        }
    }

    /** Returns the length of the list */
    length(): number {
        if (!this._head) {
            return 0;
        }

        let length = 1;
        let node = this._head;
        while (node.next) {
            length += 1;
            node = node.next;
        }
        return length;
    }

    /** Returns the last element of the list */
    tail(): ListNode<T> {
        if (!this._head) {
            throw new Error("Element has no elements");
        }
        let node: ListNode<T> = this._head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    /** Adds the value to the end of the list */
    push(value: T): LinkedList<T> {
        if (!this._head) {
            this._head = { value };
            return this;
        }

        const tail = this.tail() as ListNode<T>;
        tail.next = {
            value
        };
        return this;
    }
}

export default LinkedList;
