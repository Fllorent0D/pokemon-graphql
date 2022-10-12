import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_battle_style_proseInput } from '../languages/languages-create-nested-one-without-move-battle-style-prose.input';
import { move_battle_stylesCreateNestedOneWithoutMove_battle_style_proseInput } from '../move-battle-styles/move-battle-styles-create-nested-one-without-move-battle-style-prose.input';

@InputType()
export class move_battle_style_proseCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutMove_battle_style_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_battle_style_proseInput;

    @Field(() => move_battle_stylesCreateNestedOneWithoutMove_battle_style_proseInput, {nullable:false})
    move_battle_styles!: move_battle_stylesCreateNestedOneWithoutMove_battle_style_proseInput;
}
