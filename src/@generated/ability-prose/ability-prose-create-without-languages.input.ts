import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateNestedOneWithoutAbility_proseInput } from '../abilities/abilities-create-nested-one-without-ability-prose.input';

@InputType()
export class ability_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => String, {nullable:true})
    short_effect?: string;

    @Field(() => abilitiesCreateNestedOneWithoutAbility_proseInput, {nullable:false})
    abilities!: abilitiesCreateNestedOneWithoutAbility_proseInput;
}
