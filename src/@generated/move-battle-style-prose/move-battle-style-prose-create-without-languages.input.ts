import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_stylesCreateNestedOneWithoutMove_battle_style_proseInput } from '../move-battle-styles/move-battle-styles-create-nested-one-without-move-battle-style-prose.input';

@InputType()
export class move_battle_style_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => move_battle_stylesCreateNestedOneWithoutMove_battle_style_proseInput, {nullable:false})
    move_battle_styles!: move_battle_stylesCreateNestedOneWithoutMove_battle_style_proseInput;
}
