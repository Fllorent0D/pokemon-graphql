import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_namesWhereInput } from '../nature-names/nature-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManynatureNamesArgs {

    @Field(() => nature_namesWhereInput, {nullable:true})
    @Type(() => nature_namesWhereInput)
    where?: nature_namesWhereInput;
}
