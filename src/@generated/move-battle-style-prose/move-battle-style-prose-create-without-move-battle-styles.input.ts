import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_battle_style_proseInput } from '../languages/languages-create-nested-one-without-move-battle-style-prose.input';

@InputType()
export class move_battle_style_proseCreateWithoutMove_battle_stylesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutMove_battle_style_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_battle_style_proseInput;
}
