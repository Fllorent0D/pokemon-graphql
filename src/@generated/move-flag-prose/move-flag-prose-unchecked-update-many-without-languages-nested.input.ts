import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_proseCreateWithoutLanguagesInput } from './move-flag-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_flag_proseCreateOrConnectWithoutLanguagesInput } from './move-flag-prose-create-or-connect-without-languages.input';
import { move_flag_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './move-flag-prose-upsert-with-where-unique-without-languages.input';
import { move_flag_proseWhereUniqueInput } from './move-flag-prose-where-unique.input';
import { move_flag_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './move-flag-prose-update-with-where-unique-without-languages.input';
import { move_flag_proseUpdateManyWithWhereWithoutLanguagesInput } from './move-flag-prose-update-many-with-where-without-languages.input';
import { move_flag_proseScalarWhereInput } from './move-flag-prose-scalar-where.input';

@InputType()
export class move_flag_proseUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [move_flag_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flag_proseCreateWithoutLanguagesInput)
    create?: Array<move_flag_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_flag_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flag_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_flag_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_flag_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flag_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<move_flag_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_proseWhereUniqueInput)
    set?: Array<move_flag_proseWhereUniqueInput>;

    @Field(() => [move_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_proseWhereUniqueInput)
    disconnect?: Array<move_flag_proseWhereUniqueInput>;

    @Field(() => [move_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_proseWhereUniqueInput)
    delete?: Array<move_flag_proseWhereUniqueInput>;

    @Field(() => [move_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_flag_proseWhereUniqueInput)
    connect?: Array<move_flag_proseWhereUniqueInput>;

    @Field(() => [move_flag_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flag_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<move_flag_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_flag_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flag_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<move_flag_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [move_flag_proseScalarWhereInput], {nullable:true})
    @Type(() => move_flag_proseScalarWhereInput)
    deleteMany?: Array<move_flag_proseScalarWhereInput>;
}
