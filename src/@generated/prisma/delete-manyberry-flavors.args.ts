import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_flavorsWhereInput } from '../berry-flavors/berry-flavors-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyberryFlavorsArgs {

    @Field(() => berry_flavorsWhereInput, {nullable:true})
    @Type(() => berry_flavorsWhereInput)
    where?: berry_flavorsWhereInput;
}
