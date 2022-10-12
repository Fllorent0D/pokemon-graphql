import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogWhereUniqueInput } from './ability-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { ability_changelogUpdateWithoutAbilitiesInput } from './ability-changelog-update-without-abilities.input';

@InputType()
export class ability_changelogUpdateWithWhereUniqueWithoutAbilitiesInput {

    @Field(() => ability_changelogWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelogWhereUniqueInput)
    where!: ability_changelogWhereUniqueInput;

    @Field(() => ability_changelogUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => ability_changelogUpdateWithoutAbilitiesInput)
    data!: ability_changelogUpdateWithoutAbilitiesInput;
}
