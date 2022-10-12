import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_battle_style_preferencesCreateNestedManyWithoutMove_battle_stylesInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-create-nested-many-without-move-battle-styles.input';

@InputType()
export class move_battle_stylesCreateWithoutMove_battle_style_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => nature_battle_style_preferencesCreateNestedManyWithoutMove_battle_stylesInput, {nullable:true})
    nature_battle_style_preferences?: nature_battle_style_preferencesCreateNestedManyWithoutMove_battle_stylesInput;
}
