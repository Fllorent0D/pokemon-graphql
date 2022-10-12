import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersCreateWithoutLocation_areasInput } from './encounters-create-without-location-areas.input';
import { Type } from 'class-transformer';
import { encountersCreateOrConnectWithoutLocation_areasInput } from './encounters-create-or-connect-without-location-areas.input';
import { encountersUpsertWithWhereUniqueWithoutLocation_areasInput } from './encounters-upsert-with-where-unique-without-location-areas.input';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { encountersUpdateWithWhereUniqueWithoutLocation_areasInput } from './encounters-update-with-where-unique-without-location-areas.input';
import { encountersUpdateManyWithWhereWithoutLocation_areasInput } from './encounters-update-many-with-where-without-location-areas.input';
import { encountersScalarWhereInput } from './encounters-scalar-where.input';

@InputType()
export class encountersUncheckedUpdateManyWithoutLocation_areasNestedInput {

    @Field(() => [encountersCreateWithoutLocation_areasInput], {nullable:true})
    @Type(() => encountersCreateWithoutLocation_areasInput)
    create?: Array<encountersCreateWithoutLocation_areasInput>;

    @Field(() => [encountersCreateOrConnectWithoutLocation_areasInput], {nullable:true})
    @Type(() => encountersCreateOrConnectWithoutLocation_areasInput)
    connectOrCreate?: Array<encountersCreateOrConnectWithoutLocation_areasInput>;

    @Field(() => [encountersUpsertWithWhereUniqueWithoutLocation_areasInput], {nullable:true})
    @Type(() => encountersUpsertWithWhereUniqueWithoutLocation_areasInput)
    upsert?: Array<encountersUpsertWithWhereUniqueWithoutLocation_areasInput>;

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

    @Field(() => [encountersUpdateWithWhereUniqueWithoutLocation_areasInput], {nullable:true})
    @Type(() => encountersUpdateWithWhereUniqueWithoutLocation_areasInput)
    update?: Array<encountersUpdateWithWhereUniqueWithoutLocation_areasInput>;

    @Field(() => [encountersUpdateManyWithWhereWithoutLocation_areasInput], {nullable:true})
    @Type(() => encountersUpdateManyWithWhereWithoutLocation_areasInput)
    updateMany?: Array<encountersUpdateManyWithWhereWithoutLocation_areasInput>;

    @Field(() => [encountersScalarWhereInput], {nullable:true})
    @Type(() => encountersScalarWhereInput)
    deleteMany?: Array<encountersScalarWhereInput>;
}
