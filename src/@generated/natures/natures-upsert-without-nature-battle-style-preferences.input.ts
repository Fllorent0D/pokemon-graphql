import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesUpdateWithoutNature_battle_style_preferencesInput } from './natures-update-without-nature-battle-style-preferences.input';
import { Type } from 'class-transformer';
import { naturesCreateWithoutNature_battle_style_preferencesInput } from './natures-create-without-nature-battle-style-preferences.input';

@InputType()
export class naturesUpsertWithoutNature_battle_style_preferencesInput {

    @Field(() => naturesUpdateWithoutNature_battle_style_preferencesInput, {nullable:false})
    @Type(() => naturesUpdateWithoutNature_battle_style_preferencesInput)
    update!: naturesUpdateWithoutNature_battle_style_preferencesInput;

    @Field(() => naturesCreateWithoutNature_battle_style_preferencesInput, {nullable:false})
    @Type(() => naturesCreateWithoutNature_battle_style_preferencesInput)
    create!: naturesCreateWithoutNature_battle_style_preferencesInput;
}
