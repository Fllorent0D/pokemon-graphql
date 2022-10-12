import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesCreateWithoutNature_battle_style_preferencesInput } from './natures-create-without-nature-battle-style-preferences.input';
import { Type } from 'class-transformer';
import { naturesCreateOrConnectWithoutNature_battle_style_preferencesInput } from './natures-create-or-connect-without-nature-battle-style-preferences.input';
import { naturesWhereUniqueInput } from './natures-where-unique.input';

@InputType()
export class naturesCreateNestedOneWithoutNature_battle_style_preferencesInput {

    @Field(() => naturesCreateWithoutNature_battle_style_preferencesInput, {nullable:true})
    @Type(() => naturesCreateWithoutNature_battle_style_preferencesInput)
    create?: naturesCreateWithoutNature_battle_style_preferencesInput;

    @Field(() => naturesCreateOrConnectWithoutNature_battle_style_preferencesInput, {nullable:true})
    @Type(() => naturesCreateOrConnectWithoutNature_battle_style_preferencesInput)
    connectOrCreate?: naturesCreateOrConnectWithoutNature_battle_style_preferencesInput;

    @Field(() => naturesWhereUniqueInput, {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    connect?: naturesWhereUniqueInput;
}
