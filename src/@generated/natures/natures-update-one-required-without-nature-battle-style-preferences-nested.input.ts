import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesCreateWithoutNature_battle_style_preferencesInput } from './natures-create-without-nature-battle-style-preferences.input';
import { Type } from 'class-transformer';
import { naturesCreateOrConnectWithoutNature_battle_style_preferencesInput } from './natures-create-or-connect-without-nature-battle-style-preferences.input';
import { naturesUpsertWithoutNature_battle_style_preferencesInput } from './natures-upsert-without-nature-battle-style-preferences.input';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { naturesUpdateWithoutNature_battle_style_preferencesInput } from './natures-update-without-nature-battle-style-preferences.input';

@InputType()
export class naturesUpdateOneRequiredWithoutNature_battle_style_preferencesNestedInput {

    @Field(() => naturesCreateWithoutNature_battle_style_preferencesInput, {nullable:true})
    @Type(() => naturesCreateWithoutNature_battle_style_preferencesInput)
    create?: naturesCreateWithoutNature_battle_style_preferencesInput;

    @Field(() => naturesCreateOrConnectWithoutNature_battle_style_preferencesInput, {nullable:true})
    @Type(() => naturesCreateOrConnectWithoutNature_battle_style_preferencesInput)
    connectOrCreate?: naturesCreateOrConnectWithoutNature_battle_style_preferencesInput;

    @Field(() => naturesUpsertWithoutNature_battle_style_preferencesInput, {nullable:true})
    @Type(() => naturesUpsertWithoutNature_battle_style_preferencesInput)
    upsert?: naturesUpsertWithoutNature_battle_style_preferencesInput;

    @Field(() => naturesWhereUniqueInput, {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    connect?: naturesWhereUniqueInput;

    @Field(() => naturesUpdateWithoutNature_battle_style_preferencesInput, {nullable:true})
    @Type(() => naturesUpdateWithoutNature_battle_style_preferencesInput)
    update?: naturesUpdateWithoutNature_battle_style_preferencesInput;
}
