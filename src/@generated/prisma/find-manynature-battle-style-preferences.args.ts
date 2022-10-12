import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_battle_style_preferencesWhereInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-where.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesOrderByWithRelationInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-order-by-with-relation.input';
import { nature_battle_style_preferencesWhereUniqueInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Nature_battle_style_preferencesScalarFieldEnum } from './nature-battle-style-preferences-scalar-field.enum';

@ArgsType()
export class FindManynatureBattleStylePreferencesArgs {

    @Field(() => nature_battle_style_preferencesWhereInput, {nullable:true})
    @Type(() => nature_battle_style_preferencesWhereInput)
    where?: nature_battle_style_preferencesWhereInput;

    @Field(() => [nature_battle_style_preferencesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<nature_battle_style_preferencesOrderByWithRelationInput>;

    @Field(() => nature_battle_style_preferencesWhereUniqueInput, {nullable:true})
    cursor?: nature_battle_style_preferencesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Nature_battle_style_preferencesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Nature_battle_style_preferencesScalarFieldEnum>;
}
