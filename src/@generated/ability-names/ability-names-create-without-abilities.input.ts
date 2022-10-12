import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutAbility_namesInput } from '../languages/languages-create-nested-one-without-ability-names.input';

@InputType()
export class ability_namesCreateWithoutAbilitiesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutAbility_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutAbility_namesInput;
}
