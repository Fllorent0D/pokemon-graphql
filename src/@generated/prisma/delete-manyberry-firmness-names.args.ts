import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmness_namesWhereInput } from '../berry-firmness-names/berry-firmness-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyberryFirmnessNamesArgs {

    @Field(() => berry_firmness_namesWhereInput, {nullable:true})
    @Type(() => berry_firmness_namesWhereInput)
    where?: berry_firmness_namesWhereInput;
}
