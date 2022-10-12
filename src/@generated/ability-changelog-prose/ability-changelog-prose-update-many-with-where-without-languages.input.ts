import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelog_proseScalarWhereInput } from './ability-changelog-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { ability_changelog_proseUpdateManyMutationInput } from './ability-changelog-prose-update-many-mutation.input';

@InputType()
export class ability_changelog_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => ability_changelog_proseScalarWhereInput, {nullable:false})
    @Type(() => ability_changelog_proseScalarWhereInput)
    where!: ability_changelog_proseScalarWhereInput;

    @Field(() => ability_changelog_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => ability_changelog_proseUpdateManyMutationInput)
    data!: ability_changelog_proseUpdateManyMutationInput;
}
