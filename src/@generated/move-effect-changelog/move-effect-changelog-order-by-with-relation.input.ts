import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { version_groupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { move_effectsOrderByWithRelationInput } from '../move-effects/move-effects-order-by-with-relation.input';
import { move_effect_changelog_proseOrderByRelationAggregateInput } from '../move-effect-changelog-prose/move-effect-changelog-prose-order-by-relation-aggregate.input';

@InputType()
export class move_effect_changelogOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    changed_in_version_group_id?: keyof typeof SortOrder;

    @Field(() => version_groupsOrderByWithRelationInput, {nullable:true})
    version_groups?: version_groupsOrderByWithRelationInput;

    @Field(() => move_effectsOrderByWithRelationInput, {nullable:true})
    move_effects?: move_effectsOrderByWithRelationInput;

    @Field(() => move_effect_changelog_proseOrderByRelationAggregateInput, {nullable:true})
    move_effect_changelog_prose?: move_effect_changelog_proseOrderByRelationAggregateInput;
}
