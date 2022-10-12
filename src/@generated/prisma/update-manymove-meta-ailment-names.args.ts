import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailment_namesUpdateManyMutationInput } from '../move-meta-ailment-names/move-meta-ailment-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_meta_ailment_namesWhereInput } from '../move-meta-ailment-names/move-meta-ailment-names-where.input';

@ArgsType()
export class UpdateManymoveMetaAilmentNamesArgs {

    @Field(() => move_meta_ailment_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => move_meta_ailment_namesUpdateManyMutationInput)
    data!: move_meta_ailment_namesUpdateManyMutationInput;

    @Field(() => move_meta_ailment_namesWhereInput, {nullable:true})
    @Type(() => move_meta_ailment_namesWhereInput)
    where?: move_meta_ailment_namesWhereInput;
}
