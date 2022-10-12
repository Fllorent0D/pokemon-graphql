import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_style_proseCreateWithoutLanguagesInput } from './move-battle-style-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_battle_style_proseCreateOrConnectWithoutLanguagesInput } from './move-battle-style-prose-create-or-connect-without-languages.input';
import { move_battle_style_proseWhereUniqueInput } from './move-battle-style-prose-where-unique.input';

@InputType()
export class move_battle_style_proseUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [move_battle_style_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_battle_style_proseCreateWithoutLanguagesInput)
    create?: Array<move_battle_style_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_battle_style_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_battle_style_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_battle_style_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_battle_style_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    connect?: Array<move_battle_style_proseWhereUniqueInput>;
}
