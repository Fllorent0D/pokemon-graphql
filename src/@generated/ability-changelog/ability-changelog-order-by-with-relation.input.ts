import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { version_groupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { abilitiesOrderByWithRelationInput } from '../abilities/abilities-order-by-with-relation.input';
import { ability_changelog_proseOrderByRelationAggregateInput } from '../ability-changelog-prose/ability-changelog-prose-order-by-relation-aggregate.input';

@InputType()
export class ability_changelogOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ability_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    changed_in_version_group_id?: keyof typeof SortOrder;

    @Field(() => version_groupsOrderByWithRelationInput, {nullable:true})
    version_groups?: version_groupsOrderByWithRelationInput;

    @Field(() => abilitiesOrderByWithRelationInput, {nullable:true})
    abilities?: abilitiesOrderByWithRelationInput;

    @Field(() => ability_changelog_proseOrderByRelationAggregateInput, {nullable:true})
    ability_changelog_prose?: ability_changelog_proseOrderByRelationAggregateInput;
}
