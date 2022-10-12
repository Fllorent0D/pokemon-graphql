import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateNestedOneWithoutAbility_namesInput } from '../abilities/abilities-create-nested-one-without-ability-names.input';

@InputType()
export class ability_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => abilitiesCreateNestedOneWithoutAbility_namesInput, {nullable:false})
    abilities!: abilitiesCreateNestedOneWithoutAbility_namesInput;
}
