import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutAbility_proseInput } from '../languages/languages-create-nested-one-without-ability-prose.input';
import { abilitiesCreateNestedOneWithoutAbility_proseInput } from '../abilities/abilities-create-nested-one-without-ability-prose.input';

@InputType()
export class ability_proseCreateInput {

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => String, {nullable:true})
    short_effect?: string;

    @Field(() => languagesCreateNestedOneWithoutAbility_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutAbility_proseInput;

    @Field(() => abilitiesCreateNestedOneWithoutAbility_proseInput, {nullable:false})
    abilities!: abilitiesCreateNestedOneWithoutAbility_proseInput;
}
