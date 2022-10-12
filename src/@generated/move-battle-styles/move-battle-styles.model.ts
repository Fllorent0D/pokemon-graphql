import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { move_battle_style_prose } from '../move-battle-style-prose/move-battle-style-prose.model';
import { nature_battle_style_preferences } from '../nature-battle-style-preferences/nature-battle-style-preferences.model';
import { Move_battle_stylesCount } from '../prisma/move-battle-styles-count.output';

@ObjectType()
export class move_battle_styles {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [move_battle_style_prose], {nullable:true})
    move_battle_style_prose?: Array<move_battle_style_prose>;

    @Field(() => [nature_battle_style_preferences], {nullable:true})
    nature_battle_style_preferences?: Array<nature_battle_style_preferences>;

    @Field(() => Move_battle_stylesCount, {nullable:false})
    _count?: Move_battle_stylesCount;
}
