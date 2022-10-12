import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_battle_style_preferencesUpdateInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-update.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesWhereUniqueInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-where-unique.input';

@ArgsType()
export class UpdateOnenatureBattleStylePreferencesArgs {

    @Field(() => nature_battle_style_preferencesUpdateInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesUpdateInput)
    data!: nature_battle_style_preferencesUpdateInput;

    @Field(() => nature_battle_style_preferencesWhereUniqueInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesWhereUniqueInput)
    where!: nature_battle_style_preferencesWhereUniqueInput;
}
