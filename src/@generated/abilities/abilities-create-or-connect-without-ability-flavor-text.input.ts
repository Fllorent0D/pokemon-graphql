import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { abilitiesCreateWithoutAbility_flavor_textInput } from './abilities-create-without-ability-flavor-text.input';

@InputType()
export class abilitiesCreateOrConnectWithoutAbility_flavor_textInput {

    @Field(() => abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => abilitiesWhereUniqueInput)
    where!: abilitiesWhereUniqueInput;

    @Field(() => abilitiesCreateWithoutAbility_flavor_textInput, {nullable:false})
    @Type(() => abilitiesCreateWithoutAbility_flavor_textInput)
    create!: abilitiesCreateWithoutAbility_flavor_textInput;
}
