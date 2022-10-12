import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { naturesCreateWithoutNature_battle_style_preferencesInput } from './natures-create-without-nature-battle-style-preferences.input';

@InputType()
export class naturesCreateOrConnectWithoutNature_battle_style_preferencesInput {

    @Field(() => naturesWhereUniqueInput, {nullable:false})
    @Type(() => naturesWhereUniqueInput)
    where!: naturesWhereUniqueInput;

    @Field(() => naturesCreateWithoutNature_battle_style_preferencesInput, {nullable:false})
    @Type(() => naturesCreateWithoutNature_battle_style_preferencesInput)
    create!: naturesCreateWithoutNature_battle_style_preferencesInput;
}
