import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { regionsOrderByWithRelationInput } from '../regions/regions-order-by-with-relation.input';
import { version_groupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';

@InputType()
export class version_group_regionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    region_id?: keyof typeof SortOrder;

    @Field(() => regionsOrderByWithRelationInput, {nullable:true})
    regions?: regionsOrderByWithRelationInput;

    @Field(() => version_groupsOrderByWithRelationInput, {nullable:true})
    version_groups?: version_groupsOrderByWithRelationInput;
}
