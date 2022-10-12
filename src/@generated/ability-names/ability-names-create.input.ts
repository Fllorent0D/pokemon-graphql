import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutAbility_namesInput } from '../languages/languages-create-nested-one-without-ability-names.input';
import { abilitiesCreateNestedOneWithoutAbility_namesInput } from '../abilities/abilities-create-nested-one-without-ability-names.input';

@InputType()
export class ability_namesCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutAbility_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutAbility_namesInput;

    @Field(() => abilitiesCreateNestedOneWithoutAbility_namesInput, {nullable:false})
    abilities!: abilitiesCreateNestedOneWithoutAbility_namesInput;
}
