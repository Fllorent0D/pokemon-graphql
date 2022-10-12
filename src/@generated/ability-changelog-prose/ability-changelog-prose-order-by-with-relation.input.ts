import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { ability_changelogOrderByWithRelationInput } from '../ability-changelog/ability-changelog-order-by-with-relation.input';

@InputType()
export class ability_changelog_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    ability_changelog_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => ability_changelogOrderByWithRelationInput, {nullable:true})
    ability_changelog?: ability_changelogOrderByWithRelationInput;
}
