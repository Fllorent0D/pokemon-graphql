import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_flavorsCreateWithoutBerriesInput } from './berry-flavors-create-without-berries.input';
import { Type } from 'class-transformer';
import { berry_flavorsCreateOrConnectWithoutBerriesInput } from './berry-flavors-create-or-connect-without-berries.input';
import { berry_flavorsWhereUniqueInput } from './berry-flavors-where-unique.input';

@InputType()
export class berry_flavorsCreateNestedManyWithoutBerriesInput {

    @Field(() => [berry_flavorsCreateWithoutBerriesInput], {nullable:true})
    @Type(() => berry_flavorsCreateWithoutBerriesInput)
    create?: Array<berry_flavorsCreateWithoutBerriesInput>;

    @Field(() => [berry_flavorsCreateOrConnectWithoutBerriesInput], {nullable:true})
    @Type(() => berry_flavorsCreateOrConnectWithoutBerriesInput)
    connectOrCreate?: Array<berry_flavorsCreateOrConnectWithoutBerriesInput>;

    @Field(() => [berry_flavorsWhereUniqueInput], {nullable:true})
    @Type(() => berry_flavorsWhereUniqueInput)
    connect?: Array<berry_flavorsWhereUniqueInput>;
}
