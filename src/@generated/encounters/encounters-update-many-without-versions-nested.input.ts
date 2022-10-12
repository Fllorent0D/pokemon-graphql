import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersCreateWithoutVersionsInput } from './encounters-create-without-versions.input';
import { Type } from 'class-transformer';
import { encountersCreateOrConnectWithoutVersionsInput } from './encounters-create-or-connect-without-versions.input';
import { encountersUpsertWithWhereUniqueWithoutVersionsInput } from './encounters-upsert-with-where-unique-without-versions.input';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { encountersUpdateWithWhereUniqueWithoutVersionsInput } from './encounters-update-with-where-unique-without-versions.input';
import { encountersUpdateManyWithWhereWithoutVersionsInput } from './encounters-update-many-with-where-without-versions.input';
import { encountersScalarWhereInput } from './encounters-scalar-where.input';

@InputType()
export class encountersUpdateManyWithoutVersionsNestedInput {

    @Field(() => [encountersCreateWithoutVersionsInput], {nullable:true})
    @Type(() => encountersCreateWithoutVersionsInput)
    create?: Array<encountersCreateWithoutVersionsInput>;

    @Field(() => [encountersCreateOrConnectWithoutVersionsInput], {nullable:true})
    @Type(() => encountersCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: Array<encountersCreateOrConnectWithoutVersionsInput>;

    @Field(() => [encountersUpsertWithWhereUniqueWithoutVersionsInput], {nullable:true})
    @Type(() => encountersUpsertWithWhereUniqueWithoutVersionsInput)
    upsert?: Array<encountersUpsertWithWhereUniqueWithoutVersionsInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    set?: Array<encountersWhereUniqueInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    disconnect?: Array<encountersWhereUniqueInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    delete?: Array<encountersWhereUniqueInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    connect?: Array<encountersWhereUniqueInput>;

    @Field(() => [encountersUpdateWithWhereUniqueWithoutVersionsInput], {nullable:true})
    @Type(() => encountersUpdateWithWhereUniqueWithoutVersionsInput)
    update?: Array<encountersUpdateWithWhereUniqueWithoutVersionsInput>;

    @Field(() => [encountersUpdateManyWithWhereWithoutVersionsInput], {nullable:true})
    @Type(() => encountersUpdateManyWithWhereWithoutVersionsInput)
    updateMany?: Array<encountersUpdateManyWithWhereWithoutVersionsInput>;

    @Field(() => [encountersScalarWhereInput], {nullable:true})
    @Type(() => encountersScalarWhereInput)
    deleteMany?: Array<encountersScalarWhereInput>;
}
