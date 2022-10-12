import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogCreateWithoutTypesInput } from './move-changelog-create-without-types.input';
import { Type } from 'class-transformer';
import { move_changelogCreateOrConnectWithoutTypesInput } from './move-changelog-create-or-connect-without-types.input';
import { move_changelogUpsertWithWhereUniqueWithoutTypesInput } from './move-changelog-upsert-with-where-unique-without-types.input';
import { move_changelogWhereUniqueInput } from './move-changelog-where-unique.input';
import { move_changelogUpdateWithWhereUniqueWithoutTypesInput } from './move-changelog-update-with-where-unique-without-types.input';
import { move_changelogUpdateManyWithWhereWithoutTypesInput } from './move-changelog-update-many-with-where-without-types.input';
import { move_changelogScalarWhereInput } from './move-changelog-scalar-where.input';

@InputType()
export class move_changelogUpdateManyWithoutTypesNestedInput {

    @Field(() => [move_changelogCreateWithoutTypesInput], {nullable:true})
    @Type(() => move_changelogCreateWithoutTypesInput)
    create?: Array<move_changelogCreateWithoutTypesInput>;

    @Field(() => [move_changelogCreateOrConnectWithoutTypesInput], {nullable:true})
    @Type(() => move_changelogCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Array<move_changelogCreateOrConnectWithoutTypesInput>;

    @Field(() => [move_changelogUpsertWithWhereUniqueWithoutTypesInput], {nullable:true})
    @Type(() => move_changelogUpsertWithWhereUniqueWithoutTypesInput)
    upsert?: Array<move_changelogUpsertWithWhereUniqueWithoutTypesInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    set?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    disconnect?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    delete?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogWhereUniqueInput], {nullable:true})
    @Type(() => move_changelogWhereUniqueInput)
    connect?: Array<move_changelogWhereUniqueInput>;

    @Field(() => [move_changelogUpdateWithWhereUniqueWithoutTypesInput], {nullable:true})
    @Type(() => move_changelogUpdateWithWhereUniqueWithoutTypesInput)
    update?: Array<move_changelogUpdateWithWhereUniqueWithoutTypesInput>;

    @Field(() => [move_changelogUpdateManyWithWhereWithoutTypesInput], {nullable:true})
    @Type(() => move_changelogUpdateManyWithWhereWithoutTypesInput)
    updateMany?: Array<move_changelogUpdateManyWithWhereWithoutTypesInput>;

    @Field(() => [move_changelogScalarWhereInput], {nullable:true})
    @Type(() => move_changelogScalarWhereInput)
    deleteMany?: Array<move_changelogScalarWhereInput>;
}
