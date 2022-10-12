import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogWhereUniqueInput } from './ability-changelog-where-unique.input';
import { Type } from 'class-transformer';
import { ability_changelogCreateWithoutAbilitiesInput } from './ability-changelog-create-without-abilities.input';

@InputType()
export class ability_changelogCreateOrConnectWithoutAbilitiesInput {

    @Field(() => ability_changelogWhereUniqueInput, {nullable:false})
    @Type(() => ability_changelogWhereUniqueInput)
    where!: ability_changelogWhereUniqueInput;

    @Field(() => ability_changelogCreateWithoutAbilitiesInput, {nullable:false})
    @Type(() => ability_changelogCreateWithoutAbilitiesInput)
    create!: ability_changelogCreateWithoutAbilitiesInput;
}
