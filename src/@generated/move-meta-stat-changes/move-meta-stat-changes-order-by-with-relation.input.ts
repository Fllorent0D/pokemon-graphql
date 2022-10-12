import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { statsOrderByWithRelationInput } from '../stats/stats-order-by-with-relation.input';
import { movesOrderByWithRelationInput } from '../moves/moves-order-by-with-relation.input';

@InputType()
export class move_meta_stat_changesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    change?: keyof typeof SortOrder;

    @Field(() => statsOrderByWithRelationInput, {nullable:true})
    stats?: statsOrderByWithRelationInput;

    @Field(() => movesOrderByWithRelationInput, {nullable:true})
    moves?: movesOrderByWithRelationInput;
}
