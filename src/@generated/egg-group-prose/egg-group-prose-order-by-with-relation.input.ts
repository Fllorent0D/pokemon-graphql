import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { egg_groupsOrderByWithRelationInput } from '../egg-groups/egg-groups-order-by-with-relation.input';

@InputType()
export class egg_group_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    egg_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => egg_groupsOrderByWithRelationInput, {nullable:true})
    egg_groups?: egg_groupsOrderByWithRelationInput;
}
