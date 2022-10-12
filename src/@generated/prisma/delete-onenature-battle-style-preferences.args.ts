import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_battle_style_preferencesWhereUniqueInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnenatureBattleStylePreferencesArgs {

    @Field(() => nature_battle_style_preferencesWhereUniqueInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesWhereUniqueInput)
    where!: nature_battle_style_preferencesWhereUniqueInput;
}
