import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_battle_style_proseCreateWithoutLanguagesInput } from './move-battle-style-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_battle_style_proseCreateOrConnectWithoutLanguagesInput } from './move-battle-style-prose-create-or-connect-without-languages.input';
import { move_battle_style_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './move-battle-style-prose-upsert-with-where-unique-without-languages.input';
import { move_battle_style_proseWhereUniqueInput } from './move-battle-style-prose-where-unique.input';
import { move_battle_style_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './move-battle-style-prose-update-with-where-unique-without-languages.input';
import { move_battle_style_proseUpdateManyWithWhereWithoutLanguagesInput } from './move-battle-style-prose-update-many-with-where-without-languages.input';
import { move_battle_style_proseScalarWhereInput } from './move-battle-style-prose-scalar-where.input';

@InputType()
export class move_battle_style_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [move_battle_style_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_battle_style_proseCreateWithoutLanguagesInput)
    create?: Array<move_battle_style_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_battle_style_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_battle_style_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_battle_style_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_battle_style_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_battle_style_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<move_battle_style_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_battle_style_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    set?: Array<move_battle_style_proseWhereUniqueInput>;

    @Field(() => [move_battle_style_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    disconnect?: Array<move_battle_style_proseWhereUniqueInput>;

    @Field(() => [move_battle_style_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    delete?: Array<move_battle_style_proseWhereUniqueInput>;

    @Field(() => [move_battle_style_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    connect?: Array<move_battle_style_proseWhereUniqueInput>;

    @Field(() => [move_battle_style_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_battle_style_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<move_battle_style_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_battle_style_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => move_battle_style_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<move_battle_style_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [move_battle_style_proseScalarWhereInput], {nullable:true})
    @Type(() => move_battle_style_proseScalarWhereInput)
    deleteMany?: Array<move_battle_style_proseScalarWhereInput>;
}
