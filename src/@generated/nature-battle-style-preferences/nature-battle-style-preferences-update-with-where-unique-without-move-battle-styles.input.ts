import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_battle_style_preferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesUpdateWithoutMove_battle_stylesInput } from './nature-battle-style-preferences-update-without-move-battle-styles.input';

@InputType()
export class nature_battle_style_preferencesUpdateWithWhereUniqueWithoutMove_battle_stylesInput {

    @Field(() => nature_battle_style_preferencesWhereUniqueInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesWhereUniqueInput)
    where!: nature_battle_style_preferencesWhereUniqueInput;

    @Field(() => nature_battle_style_preferencesUpdateWithoutMove_battle_stylesInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesUpdateWithoutMove_battle_stylesInput)
    data!: nature_battle_style_preferencesUpdateWithoutMove_battle_stylesInput;
}
