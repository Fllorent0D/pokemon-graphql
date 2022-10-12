import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_battle_style_proseUncheckedCreateNestedManyWithoutMove_battle_stylesInput } from '../move-battle-style-prose/move-battle-style-prose-unchecked-create-nested-many-without-move-battle-styles.input';
import { nature_battle_style_preferencesUncheckedCreateNestedManyWithoutMove_battle_stylesInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-unchecked-create-nested-many-without-move-battle-styles.input';

@InputType()
export class move_battle_stylesUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_battle_style_proseUncheckedCreateNestedManyWithoutMove_battle_stylesInput, {nullable:true})
    move_battle_style_prose?: move_battle_style_proseUncheckedCreateNestedManyWithoutMove_battle_stylesInput;

    @Field(() => nature_battle_style_preferencesUncheckedCreateNestedManyWithoutMove_battle_stylesInput, {nullable:true})
    nature_battle_style_preferences?: nature_battle_style_preferencesUncheckedCreateNestedManyWithoutMove_battle_stylesInput;
}
