import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { movesOrderByWithRelationInput } from '../moves/moves-order-by-with-relation.input';

@InputType()
export class super_contest_combosOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    first_move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    second_move_id?: keyof typeof SortOrder;

    @Field(() => movesOrderByWithRelationInput, {nullable:true})
    moves_movesTosuper_contest_combos_second_move_id?: movesOrderByWithRelationInput;

    @Field(() => movesOrderByWithRelationInput, {nullable:true})
    moves_movesTosuper_contest_combos_first_move_id?: movesOrderByWithRelationInput;
}
