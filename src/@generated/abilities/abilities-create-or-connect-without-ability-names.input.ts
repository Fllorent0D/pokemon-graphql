import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { abilitiesCreateWithoutAbility_namesInput } from './abilities-create-without-ability-names.input';

@InputType()
export class abilitiesCreateOrConnectWithoutAbility_namesInput {

    @Field(() => abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => abilitiesWhereUniqueInput)
    where!: abilitiesWhereUniqueInput;

    @Field(() => abilitiesCreateWithoutAbility_namesInput, {nullable:false})
    @Type(() => abilitiesCreateWithoutAbility_namesInput)
    create!: abilitiesCreateWithoutAbility_namesInput;
}
