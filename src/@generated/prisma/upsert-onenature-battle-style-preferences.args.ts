import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_battle_style_preferencesWhereUniqueInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-where-unique.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesCreateInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-create.input';
import { nature_battle_style_preferencesUpdateInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-update.input';

@ArgsType()
export class UpsertOnenatureBattleStylePreferencesArgs {

    @Field(() => nature_battle_style_preferencesWhereUniqueInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesWhereUniqueInput)
    where!: nature_battle_style_preferencesWhereUniqueInput;

    @Field(() => nature_battle_style_preferencesCreateInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesCreateInput)
    create!: nature_battle_style_preferencesCreateInput;

    @Field(() => nature_battle_style_preferencesUpdateInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesUpdateInput)
    update!: nature_battle_style_preferencesUpdateInput;
}
