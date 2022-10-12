import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { naturesCreateWithoutNature_namesInput } from './natures-create-without-nature-names.input';

@InputType()
export class naturesCreateOrConnectWithoutNature_namesInput {

    @Field(() => naturesWhereUniqueInput, {nullable:false})
    @Type(() => naturesWhereUniqueInput)
    where!: naturesWhereUniqueInput;

    @Field(() => naturesCreateWithoutNature_namesInput, {nullable:false})
    @Type(() => naturesCreateWithoutNature_namesInput)
    create!: naturesCreateWithoutNature_namesInput;
}
