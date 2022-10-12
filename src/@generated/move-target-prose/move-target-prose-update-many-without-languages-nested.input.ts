import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_target_proseCreateWithoutLanguagesInput } from './move-target-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_target_proseCreateOrConnectWithoutLanguagesInput } from './move-target-prose-create-or-connect-without-languages.input';
import { move_target_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './move-target-prose-upsert-with-where-unique-without-languages.input';
import { move_target_proseWhereUniqueInput } from './move-target-prose-where-unique.input';
import { move_target_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './move-target-prose-update-with-where-unique-without-languages.input';
import { move_target_proseUpdateManyWithWhereWithoutLanguagesInput } from './move-target-prose-update-many-with-where-without-languages.input';
import { move_target_proseScalarWhereInput } from './move-target-prose-scalar-where.input';

@InputType()
export class move_target_proseUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [move_target_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_target_proseCreateWithoutLanguagesInput)
    create?: Array<move_target_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_target_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_target_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_target_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_target_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_target_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<move_target_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_target_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_target_proseWhereUniqueInput)
    set?: Array<move_target_proseWhereUniqueInput>;

    @Field(() => [move_target_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_target_proseWhereUniqueInput)
    disconnect?: Array<move_target_proseWhereUniqueInput>;

    @Field(() => [move_target_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_target_proseWhereUniqueInput)
    delete?: Array<move_target_proseWhereUniqueInput>;

    @Field(() => [move_target_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_target_proseWhereUniqueInput)
    connect?: Array<move_target_proseWhereUniqueInput>;

    @Field(() => [move_target_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_target_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<move_target_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_target_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => move_target_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<move_target_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [move_target_proseScalarWhereInput], {nullable:true})
    @Type(() => move_target_proseScalarWhereInput)
    deleteMany?: Array<move_target_proseScalarWhereInput>;
}
