import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { version_groupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { movesOrderByWithRelationInput } from '../moves/moves-order-by-with-relation.input';

@InputType()
export class move_flavor_textOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flavor_text?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => version_groupsOrderByWithRelationInput, {nullable:true})
    version_groups?: version_groupsOrderByWithRelationInput;

    @Field(() => movesOrderByWithRelationInput, {nullable:true})
    moves?: movesOrderByWithRelationInput;
}
