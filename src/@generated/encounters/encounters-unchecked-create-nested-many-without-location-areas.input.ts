import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersCreateWithoutLocation_areasInput } from './encounters-create-without-location-areas.input';
import { Type } from 'class-transformer';
import { encountersCreateOrConnectWithoutLocation_areasInput } from './encounters-create-or-connect-without-location-areas.input';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';

@InputType()
export class encountersUncheckedCreateNestedManyWithoutLocation_areasInput {

    @Field(() => [encountersCreateWithoutLocation_areasInput], {nullable:true})
    @Type(() => encountersCreateWithoutLocation_areasInput)
    create?: Array<encountersCreateWithoutLocation_areasInput>;

    @Field(() => [encountersCreateOrConnectWithoutLocation_areasInput], {nullable:true})
    @Type(() => encountersCreateOrConnectWithoutLocation_areasInput)
    connectOrCreate?: Array<encountersCreateOrConnectWithoutLocation_areasInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    connect?: Array<encountersWhereUniqueInput>;
}
