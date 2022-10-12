import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ability_changelog_proseUncheckedCreateNestedManyWithoutAbility_changelogInput } from '../ability-changelog-prose/ability-changelog-prose-unchecked-create-nested-many-without-ability-changelog.input';

@InputType()
export class ability_changelogUncheckedCreateWithoutAbilitiesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    changed_in_version_group_id!: number;

    @Field(() => ability_changelog_proseUncheckedCreateNestedManyWithoutAbility_changelogInput, {nullable:true})
    ability_changelog_prose?: ability_changelog_proseUncheckedCreateNestedManyWithoutAbility_changelogInput;
}