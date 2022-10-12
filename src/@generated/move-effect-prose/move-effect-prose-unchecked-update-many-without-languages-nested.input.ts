import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_proseCreateWithoutLanguagesInput } from './move-effect-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_effect_proseCreateOrConnectWithoutLanguagesInput } from './move-effect-prose-create-or-connect-without-languages.input';
import { move_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './move-effect-prose-upsert-with-where-unique-without-languages.input';
import { move_effect_proseWhereUniqueInput } from './move-effect-prose-where-unique.input';
import { move_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './move-effect-prose-update-with-where-unique-without-languages.input';
import { move_effect_proseUpdateManyWithWhereWithoutLanguagesInput } from './move-effect-prose-update-many-with-where-without-languages.input';
import { move_effect_proseScalarWhereInput } from './move-effect-prose-scalar-where.input';

@InputType()
export class move_effect_proseUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [move_effect_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_proseCreateWithoutLanguagesInput)
    create?: Array<move_effect_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_effect_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_effect_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<move_effect_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_proseWhereUniqueInput)
    set?: Array<move_effect_proseWhereUniqueInput>;

    @Field(() => [move_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_proseWhereUniqueInput)
    disconnect?: Array<move_effect_proseWhereUniqueInput>;

    @Field(() => [move_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_proseWhereUniqueInput)
    delete?: Array<move_effect_proseWhereUniqueInput>;

    @Field(() => [move_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_proseWhereUniqueInput)
    connect?: Array<move_effect_proseWhereUniqueInput>;

    @Field(() => [move_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<move_effect_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_effect_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<move_effect_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [move_effect_proseScalarWhereInput], {nullable:true})
    @Type(() => move_effect_proseScalarWhereInput)
    deleteMany?: Array<move_effect_proseScalarWhereInput>;
}
