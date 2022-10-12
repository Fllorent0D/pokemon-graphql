import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutAbility_proseInput } from '../languages/languages-create-nested-one-without-ability-prose.input';

@InputType()
export class ability_proseCreateWithoutAbilitiesInput {

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => String, {nullable:true})
    short_effect?: string;

    @Field(() => languagesCreateNestedOneWithoutAbility_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutAbility_proseInput;
}
