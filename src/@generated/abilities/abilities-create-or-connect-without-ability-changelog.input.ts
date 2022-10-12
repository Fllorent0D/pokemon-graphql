import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { abilitiesCreateWithoutAbility_changelogInput } from './abilities-create-without-ability-changelog.input';

@InputType()
export class abilitiesCreateOrConnectWithoutAbility_changelogInput {

    @Field(() => abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => abilitiesWhereUniqueInput)
    where!: abilitiesWhereUniqueInput;

    @Field(() => abilitiesCreateWithoutAbility_changelogInput, {nullable:false})
    @Type(() => abilitiesCreateWithoutAbility_changelogInput)
    create!: abilitiesCreateWithoutAbility_changelogInput;
}
