import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesCreateWithoutNature_namesInput } from './natures-create-without-nature-names.input';
import { Type } from 'class-transformer';
import { naturesCreateOrConnectWithoutNature_namesInput } from './natures-create-or-connect-without-nature-names.input';
import { naturesWhereUniqueInput } from './natures-where-unique.input';

@InputType()
export class naturesCreateNestedOneWithoutNature_namesInput {

    @Field(() => naturesCreateWithoutNature_namesInput, {nullable:true})
    @Type(() => naturesCreateWithoutNature_namesInput)
    create?: naturesCreateWithoutNature_namesInput;

    @Field(() => naturesCreateOrConnectWithoutNature_namesInput, {nullable:true})
    @Type(() => naturesCreateOrConnectWithoutNature_namesInput)
    connectOrCreate?: naturesCreateOrConnectWithoutNature_namesInput;

    @Field(() => naturesWhereUniqueInput, {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    connect?: naturesWhereUniqueInput;
}
